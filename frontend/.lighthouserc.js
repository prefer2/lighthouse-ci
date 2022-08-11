module.exports = {
  ci: {
    collect: {
      staticDistDir: "./build",
      // startServerCommand: "npm run start", // 서버를 키는 명령어를 통해서도 실행 가능
      url: ["http://localhost:3000"],
      numberOfRuns: 5, // lighthouse가 실행되는 횟수
    },
    upload: {
      target: "temporary-public-storage", // 보고서 저장 위치
    },
    assert: {
      assertions: {
        "dom-size": ["error", { maxNumericValue: 3000 }],
        "offscreen-images": "off",
        "color-contrast": "off",
        "tap-targets": "off",
        // performance 카테고리 점수가 90점 미만이면 warning
        "categories:performance": ["warn", { minScore: 0.9 }],
        // accessibility 가 100점 미만이면 error
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
};
