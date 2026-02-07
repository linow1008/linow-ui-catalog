module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "새로운 재사용 컴포넌트 생성",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "컴포넌트 이름을 입력하세요 (예: Button):",
      },
      {
        type: "input",
        name: "folder",
        message: "어느 폴더에 만들까요? (기본값: src/components):",
        default: "src/components",
      },
    ],
    actions: [
      // 1. 컴포넌트 파일 생성
      {
        type: "add",
        path: "{{folder}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/component.hbs",
      },
      // 2. 스토리북 파일 생성
      {
        type: "add",
        path: "{{folder}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx",
        templateFile: "plop-templates/story.hbs",
      },
      // 3. 인덱스 파일 생성 (깔끔한 import를 위해)
      {
        type: "add",
        path: "{{folder}}/{{pascalCase name}}/index.ts",
        templateFile: "plop-templates/index.hbs",
      },
    ],
  });
};
