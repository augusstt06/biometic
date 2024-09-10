# Weather ChatBot

## Overview

Open AI (Chat GPT) API와 [Weatherstack API](https://weatherstack.com/documentation)를 사용한 날씨 챗봇 어플리케이션

- Weatherstack API를 사용해 특정 위치의 날씨를 보여준다.
- 해당 날씨를 기준으로 AI 를 사용해 옷차림, 활동 추천 등 여러 카테고리의 조언을 간편하게 구할수 있다.

## Stack

<div>
  <img src="https://img.shields.io/badge/next js 14-000000?style=for-the-badge&logo=nextdotjs&logoColor=#000000">
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
  <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
</div>
<br/>
<div>
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/openai-412991?style=for-the-badge&logo=openai&logoColor=white">
  <img src="https://img.shields.io/badge/zustand-ff7f00?style=for-the-badge&logo=logoColor=white">
</div>

## Structure

```bash
src
└── app
    ├── (route)
    ├── _components
    ├── _modules
    │     ├── fetch
    │     └── util
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
