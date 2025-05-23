/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_TOKEN: string
  readonly VITE_FORM_TOKEN: string
  // Add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 