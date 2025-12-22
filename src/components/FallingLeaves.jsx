import React from 'react';

const FallingLeaves = () => {
  // 创建 6 片叶子，每片有不同的动画参数
  const leaves = [
    { id: 1, delay: 0, duration: 18, left: '8%', size: '32px', rotation: '15deg' },
    { id: 2, delay: 3, duration: 20, left: '25%', size: '28px', rotation: '-12deg' },
    { id: 3, delay: 6, duration: 19, left: '45%', size: '35px', rotation: '18deg' },
    { id: 4, delay: 9, duration: 21, left: '65%', size: '30px', rotation: '-10deg' },
    { id: 5, delay: 12, duration: 17, left: '82%', size: '26px', rotation: '14deg' },
    { id: 6, delay: 15, duration: 22, left: '15%', size: '33px', rotation: '-16deg' },
  ];

  return (
    <div className="falling-leaves-container pointer-events-none fixed inset-0 overflow-hidden z-0">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="falling-leaf"
          style={{
            '--leaf-delay': `${leaf.delay}s`,
            '--leaf-duration': `${leaf.duration}s`,
            '--leaf-left': leaf.left,
            '--leaf-size': leaf.size,
            '--leaf-rotation': leaf.rotation,
          }}
        >
          <svg
            width={leaf.size}
            height={leaf.size}
            viewBox="0 0 24 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="leaf-svg"
          >
            {/* 叶子主体 - 使用贝塞尔曲线创建自然的弯曲边缘 */}
            <path
              d="M12 1.5C10.5 1.5 9 2 7.5 3.5C6 5 5 7.5 5.5 10.5C6 13.5 7.5 16.5 9.5 19.5C10.5 21.5 11.5 23 12 24C12.5 23 13.5 21.5 14.5 19.5C16.5 16.5 18 13.5 18.5 10.5C19 7.5 18 5 16.5 3.5C15 2 13.5 1.5 12 1.5Z"
              fill="rgba(132, 204, 22, 0.45)"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="0.6"
            />
            {/* 主叶脉 - 带轻微弯曲 */}
            <path
              d="M12 2Q11.5 8 12 14Q12.5 20 12 26"
              stroke="rgba(34, 197, 94, 0.5)"
              strokeWidth="0.5"
              strokeLinecap="round"
              fill="none"
            />
            {/* 侧叶脉 - 左侧，带自然弯曲 */}
            <path
              d="M11 6Q9 8 8 10M11 10Q9 12 7.5 14M11 14Q9.5 16 8 18M11 18Q10 20 9 22"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="0.3"
              strokeLinecap="round"
              fill="none"
            />
            {/* 侧叶脉 - 右侧，带自然弯曲 */}
            <path
              d="M13 6Q15 8 16 10M13 10Q15 12 16.5 14M13 14Q14.5 16 16 18M13 18Q14 20 15 22"
              stroke="rgba(34, 197, 94, 0.4)"
              strokeWidth="0.3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingLeaves;

