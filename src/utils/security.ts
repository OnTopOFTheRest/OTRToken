// Security utility functions
export const sanitizeInput = (input: string): string => {
  return input.replace(/[<>]/g, '');
};

export const validateWalletAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

export const rateLimit = (() => {
  const requests = new Map();
  const limit = 100; // requests
  const timeWindow = 60000; // 1 minute

  return (clientId: string): boolean => {
    const now = Date.now();
    const windowStart = now - timeWindow;
    
    // Clean old requests
    requests.forEach((timestamp, key) => {
      if (timestamp < windowStart) {
        requests.delete(key);
      }
    });

    // Count requests in current window
    const clientRequests = Array.from(requests.values())
      .filter(timestamp => timestamp > windowStart)
      .length;

    if (clientRequests >= limit) {
      return false;
    }

    requests.set(clientId, now);
    return true;
  };
})();

// Anti-CSRF token generator
export const generateCSRFToken = (): string => {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
};

// Secure random number generator
export const secureRandom = (min: number, max: number): number => {
  const range = max - min;
  const bytesNeeded = Math.ceil(Math.log2(range) / 8);
  const maxNum = Math.pow(256, bytesNeeded);
  const array = new Uint8Array(bytesNeeded);

  let randomNum;
  do {
    crypto.getRandomValues(array);
    randomNum = array.reduce((acc, byte, i) => acc + byte * Math.pow(256, i), 0);
  } while (randomNum >= maxNum - (maxNum % range));

  return min + (randomNum % range);
};