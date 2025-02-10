import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // 엔트리 파일 경로 지정
  format: ["cjs", "esm"], // CommonJS 및 ESM 출력 지원
  dts: true, // 타입 정의 파일 생성
  sourcemap: true,
  clean: true,
  minify: true,
});
