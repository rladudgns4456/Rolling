/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // HTML
    './src/**/*.{js,jsx,ts,tsx}', // src 폴더 내 JS/TSX 파일만
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Pretendard',
          'Noto Sans KR', // Noto Sans KR은 후순위로
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        // 2. Noto Sans KR 전용 유틸리티 추가 (새로운 부분)
        noto: [
          'Noto Sans KR',
          'Pretendard',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        Pretendard: [
          'Pretendard',
          'system-ui',
          'Avenir',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        nanum: ['NanumMyeongjo', 'serif'],
        handwritten: ['NanumSonPyeonJiCe', 'cursive'],
      },

      screens: {
        mobile: { max: '767px' },
        tablet: { min: '768px', max: '1279px' },
        pc: { min: '1280px' },
      },

      colors: {
        purple1: '#F8F0FF',
        purple2: '#ECD9FF',
        purple3: '#DCB9FF',
        purple4: '#C894FD',
        purple5: '#AB57FF',
        purple6: '#9935FF',
        purple7: '#861DEE',
        purple8: '#6E0AD1',
        purple9: '#5603A7',

        beige1: '#FFF0D6',
        beige2: '#FFE2AD',
        beige3: '#FFC583',
        beige4: '#FFAE65',
        beige5: '#FF8832',

        blue1: '#E2F5FF',
        blue2: '#B1E4FF',
        blue3: '#7CD2FF',
        blue4: '#34B9FF',
        blue5: '#00A2FE',

        green1: '#E4FBDC',
        green2: '#D0F5C3',
        green3: '#9BE282',
        green4: '#60CF37',
        green5: '#2BA600',

        grayscale1: '#F6F6F6',
        grayscale2: '#EEEEEE',
        grayscale3: '#CCCCCC',
        grayscale4: '#999999',
        grayscale5: '#555555',
        grayscale6: '#4A4A4A',
        grayscale7: '#3A3A3A',
        grayscale8: '#2B2B2B',
        grayscale9: '#181818',

        white: '#FFFFFF',
        black: '#000000',
        error: '#DC3A3A',
        surface: '#F6F8FF',

        beige: '#FFE2AD',
        purple: '#ECD9FF',
        blue: '#B1E4FF',
        green: '#D0F5C3',
      },
    },
  },
  plugins: [],
};
