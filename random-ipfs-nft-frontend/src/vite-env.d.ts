/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly WALLET_CONNECT_PROJECT_ID: string;
  readonly DEPLOYED_CONTRACT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
