import React from 'react';

const IconLogo = () => (
  <svg
    width="100%"
    height="100%"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="214.18125 13.9893798828125 78 87"
    style={{ background: 'rgba(0, 0, 0, 0)', fontSize: '100px' }}
    preserveAspectRatio="xMidYMid">
    <defs>
      <filter id="editing-vr">
        <feFlood floodColor="#f00" floodOpacity="0.7" result="c1"></feFlood>
        <feFlood floodColor="#00f" floodOpacity="0.7" result="c3"></feFlood>
        <feComposite operator="in" in="c1" in2="SourceAlpha" result="text-c1"></feComposite>
        <feComposite operator="in" in="c3" in2="SourceAlpha" result="text-c3"></feComposite>
        <feOffset in="text-c1" dx="5" dy="-1" result="text1"></feOffset>
        <feOffset in="text-c3" dx="-5" dy="1" result="text3"></feOffset>
        <feBlend in="SourceGraphic" in2="text1" mode="multiply" result="text4"></feBlend>
        <feBlend in="text4" in2="text3" mode="multiply"></feBlend>
      </filter>
    </defs>
    <g filter="url(#editing-vr)">
      <g transform="translate(231.278750538826, 97.39218711853027)">
        <path
          d="M26.05-29.57L26.05-29.57L26.05-29.57Q27.01-31.49 27.01-33.28L27.01-33.28L27.01-33.28Q27.01-35.07 26.82-36.06L26.82-36.06L26.82-36.06Q26.62-37.06 26.18-37.82L26.18-37.82L26.18-37.82Q25.22-39.49 23.30-39.49L23.30-39.49L23.30-39.49Q20.93-39.49 19.01-37.76L19.01-37.76L19.01-37.76Q16.96-35.97 16.96-33.15L16.96-33.15L16.96-33.15Q16.96-31.36 18.21-29.98L18.21-29.98L18.21-29.98Q19.46-28.61 21.38-27.33L21.38-27.33L21.38-27.33Q23.30-26.05 25.47-24.77L25.47-24.77L25.47-24.77Q27.65-23.49 29.57-21.95L29.57-21.95L29.57-21.95Q33.98-18.43 33.98-13.70L33.98-13.70L33.98-13.70Q33.98-10.50 32.29-7.78L32.29-7.78L32.29-7.78Q30.59-5.06 27.78-3.07L27.78-3.07L27.78-3.07Q21.63 1.28 13.50 1.28L13.50 1.28L13.50 1.28Q6.91 1.28 3.52-0.86L3.52-0.86L3.52-0.86Q0.13-3.01 0.13-6.27L0.13-6.27L0.13-6.27Q0.13-12.10 4.67-13.57L4.67-13.57L4.67-13.57Q5.95-14.02 7.90-14.02L7.90-14.02L7.90-14.02Q9.86-14.02 12.10-13.18L12.10-13.18L12.10-13.18Q11.07-10.56 11.07-8.19L11.07-8.19L11.07-8.19Q11.07-3.07 14.72-3.07L14.72-3.07L14.72-3.07Q17.09-3.07 19.04-4.80L19.04-4.80L19.04-4.80Q20.99-6.53 20.99-8.48L20.99-8.48L20.99-8.48Q20.99-10.43 19.74-11.84L19.74-11.84L19.74-11.84Q18.50-13.25 16.64-14.37L16.64-14.37L16.64-14.37Q14.78-15.49 12.64-16.58L12.64-16.58L12.64-16.58Q10.50-17.66 8.64-19.20L8.64-19.20L8.64-19.20Q4.29-22.72 4.29-28.35L4.29-28.35L4.29-28.35Q4.29-32 6.08-34.85L6.08-34.85L6.08-34.85Q7.87-37.70 10.75-39.62L10.75-39.62L10.75-39.62Q16.51-43.52 23.58-43.52L23.58-43.52L23.58-43.52Q30.66-43.52 34.08-41.41L34.08-41.41L34.08-41.41Q37.50-39.30 37.50-35.71L37.50-35.71L37.50-35.71Q37.50-32.58 35.07-30.59L35.07-30.59L35.07-30.59Q32.96-28.93 30.40-28.93L30.40-28.93L30.40-28.93Q27.84-28.93 26.05-29.57Z"
          fill="#444"></path>
      </g>
    </g>
  </svg>
);

export default IconLogo;
