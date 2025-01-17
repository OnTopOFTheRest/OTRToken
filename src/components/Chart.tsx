import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import RobotScanner from './RobotScanner';

const OTRChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // ... all the calculation functions remain the same ...
    const calculateBollingerBands = (prices: number[], period = 20, multiplier = 2) => {
      const ma = [];
      const upper = [];
      const lower = [];
      
      for (let i = 0; i < prices.length; i++) {
        if (i < period - 1) {
          ma.push(null);
          upper.push(null);
          lower.push(null);
          continue;
        }
        
        const slice = prices.slice(i - period + 1, i + 1);
        const avg = slice.reduce((a, b) => a + b, 0) / period;
        const stdDev = Math.sqrt(
          slice.reduce((a, b) => a + Math.pow(b - avg, 2), 0) / period
        );
        
        ma.push(avg);
        upper.push(avg + multiplier * stdDev);
        lower.push(avg - multiplier * stdDev);
      }
      
      return { ma, upper, lower };
    };

    const calculateRSI = (prices: number[], period = 14) => {
      const rsi = [];
      let gains = [];
      let losses = [];
      
      // Calculate initial gains and losses
      for (let i = 1; i < prices.length; i++) {
        const difference = prices[i] - prices[i - 1];
        gains.push(difference > 0 ? difference : 0);
        losses.push(difference < 0 ? -difference : 0);
      }
      
      // Calculate RSI
      for (let i = 0; i < prices.length; i++) {
        if (i < period) {
          rsi.push(null);
          continue;
        }
        
        const avgGain = gains.slice(i - period, i).reduce((a, b) => a + b, 0) / period;
        const avgLoss = losses.slice(i - period, i).reduce((a, b) => a + b, 0) / period;
        
        const rs = avgGain / (avgLoss === 0 ? 1 : avgLoss);
        rsi.push(100 - (100 / (1 + rs)));
      }
      
      return rsi;
    };

    const calculateMACD = (prices: number[]) => {
      const ema12 = calculateEMA(prices, 12);
      const ema26 = calculateEMA(prices, 26);
      const macdLine = ema12.map((v, i) => 
        v === null || ema26[i] === null ? null : v - ema26[i]
      );
      const signalLine = calculateEMA(macdLine.filter(v => v !== null), 9);
      
      return { macdLine, signalLine };
    };

    const calculateEMA = (prices: number[], period: number) => {
      const ema = [];
      const multiplier = 2 / (period + 1);
      
      for (let i = 0; i < prices.length; i++) {
        if (i < period - 1) {
          ema.push(null);
          continue;
        }
        if (i === period - 1) {
          const sma = prices.slice(0, period).reduce((a, b) => a + b, 0) / period;
          ema.push(sma);
          continue;
        }
        ema.push(
          (prices[i] - ema[i - 1]) * multiplier + ema[i - 1]
        );
      }
      
      return ema;
    };

    const chartData = {
      labels: [],
      datasets: [
        {
          label: 'OTR Price',
          data: [],
          borderColor: '#06b6d4',
          backgroundColor: 'rgba(6, 182, 212, 0.1)',
          borderWidth: 2,
          pointStyle: 'line',
          pointRadius: 0,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#06b6d4',
          pointHoverBorderColor: '#fff',
          segment: {
            borderColor: (ctx: any) => {
              if (!ctx.p0.parsed || !ctx.p1.parsed) return '#06b6d4';
              return ctx.p0.parsed.y > ctx.p1.parsed.y ? 
                'rgba(239, 68, 68, 0.8)' : 
                'rgba(34, 197, 94, 0.8)';
            }
          },
          yAxisID: 'y'
        },
        {
          label: 'BB Upper',
          data: [],
          borderColor: 'rgba(147, 51, 234, 0.5)',
          borderWidth: 1,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: false,
          yAxisID: 'y'
        },
        {
          label: 'BB Middle',
          data: [],
          borderColor: 'rgba(147, 51, 234, 0.5)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          yAxisID: 'y'
        },
        {
          label: 'BB Lower',
          data: [],
          borderColor: 'rgba(147, 51, 234, 0.5)',
          borderWidth: 1,
          borderDash: [5, 5],
          pointRadius: 0,
          fill: '-1',
          backgroundColor: 'rgba(147, 51, 234, 0.1)',
          yAxisID: 'y'
        },
        {
          label: 'RSI',
          data: [],
          borderColor: 'rgba(234, 179, 8, 0.8)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          yAxisID: 'rsi'
        },
        {
          label: 'MACD',
          data: [],
          borderColor: 'rgba(6, 182, 212, 0.8)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          yAxisID: 'macd'
        },
        {
          label: 'Signal',
          data: [],
          borderColor: 'rgba(239, 68, 68, 0.8)',
          borderWidth: 1,
          pointRadius: 0,
          fill: false,
          yAxisID: 'macd'
        }
      ]
    };

    const config = {
      type: 'line' as const,
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        animation: {
          duration: 0
        },
        layout: {
          padding: {
            top: 40,
            right: 10,
            bottom: 10,
            left: 10
          }
        },
        scales: {
          y: {
            position: 'right',
            grid: {
              color: 'rgba(6, 182, 212, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: '#06b6d4',
              font: {
                family: "'Share Tech Mono', monospace",
                size: 10
              },
              callback: function(value: any) {
                return value.toFixed(8);
              }
            }
          },
          rsi: {
            position: 'right',
            grid: {
              color: 'rgba(234, 179, 8, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(234, 179, 8, 0.8)',
              font: {
                family: "'Share Tech Mono', monospace",
                size: 10
              }
            },
            min: 0,
            max: 100
          },
          macd: {
            position: 'right',
            grid: {
              color: 'rgba(6, 182, 212, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: 'rgba(6, 182, 212, 0.8)',
              font: {
                family: "'Share Tech Mono', monospace",
                size: 10
              }
            }
          },
          x: {
            grid: {
              color: 'rgba(6, 182, 212, 0.1)',
              drawBorder: false
            },
            ticks: {
              color: '#06b6d4',
              font: {
                family: "'Share Tech Mono', monospace",
                size: 10
              },
              maxRotation: 0,
              autoSkip: true,
              maxTicksLimit: 8
            }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#06b6d4',
              font: {
                family: "'Share Tech Mono', monospace",
                size: 10
              },
              usePointStyle: true,
              pointStyle: 'line',
              boxWidth: 30
            }
          },
          tooltip: {
            backgroundColor: 'rgba(13, 17, 23, 0.95)',
            titleColor: '#06b6d4',
            bodyColor: '#06b6d4',
            borderColor: '#06b6d4',
            borderWidth: 1,
            padding: 8,
            titleFont: {
              family: "'Share Tech Mono', monospace",
              size: 10
            },
            bodyFont: {
              family: "'Share Tech Mono', monospace",
              size: 10
            },
            callbacks: {
              label: function(context: any) {
                const label = context.dataset.label;
                const value = context.parsed.y;
                if (label === 'OTR Price') {
                  return `${label}: ${value.toFixed(8)} WBNB`;
                }
                return `${label}: ${value.toFixed(8)}`;
              }
            }
          }
        }
      }
    };

    const initChart = () => {
      const ctx = chartRef.current?.getContext('2d');
      if (!ctx) return;
      chartInstance.current = new Chart(ctx, config as any);
    };

    async function getOTRPrice() {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout

        const response = await fetch('https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x41d71462fa4ac035686c6de5dba7559bfba1b7e0', {
          headers: {
            'Accept': 'application/json',
            'GT-Version': '2024-01-01'
          },
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        if (data?.data?.attributes?.base_token_price_usd) {
          setError(null);
          return parseFloat(data.data.attributes.base_token_price_usd);
        }
        
        throw new Error('Price data not found in response');
      } catch (error) {
        if (error instanceof Error) {
          setError(`Unable to fetch price data: ${error.message}`);
        } else {
          setError('An unexpected error occurred');
        }
        return null;
      }
    }

    async function updateChartData() {
      try {
        if (!chartInstance.current) return;
        
        const price = await getOTRPrice();
        if (price === null) return;

        const currentTime = new Date().toLocaleTimeString();
        const data = chartInstance.current.data;
        
        data.labels.push(currentTime);
        data.datasets[0].data.push(price);

        // Calculate and update technical indicators
        const prices = data.datasets[0].data;
        
        // Bollinger Bands
        const bb = calculateBollingerBands(prices);
        data.datasets[1].data = bb.upper;
        data.datasets[2].data = bb.ma;
        data.datasets[3].data = bb.lower;
        
        // RSI
        data.datasets[4].data = calculateRSI(prices);
        
        // MACD
        const macd = calculateMACD(prices);
        data.datasets[5].data = macd.macdLine;
        data.datasets[6].data = macd.signalLine;

        // Keep last 100 data points
        if (data.labels.length > 100) {
          data.labels.shift();
          data.datasets.forEach(dataset => dataset.data.shift());
        }

        chartInstance.current.update('none');
      } catch (error) {
        if (error instanceof Error) {
          setError(`Error updating chart: ${error.message}`);
        } else {
          setError('An unexpected error occurred while updating the chart');
        }
      }
    }

    initChart();
    updateChartData();

    const interval = setInterval(updateChartData, 15000);

    return () => {
      clearInterval(interval);
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative w-full h-[400px] bg-black/40 p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300">
        <RobotScanner />
        {error && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-red-500/20 text-red-300 px-4 py-2 rounded-lg border border-red-500/40">
            {error}
          </div>
        )}
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default OTRChart;