declare global {
  var mongoose: {
    conn: any;
    promise: any;
  };

  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      STRIPE_PUBLIC_KEY: string;
      STRIPE_SECRET_KEY: string;
      JWT_SECRET: string;
      NEXTAUTH_SECRET: string;
      NEXTAUTH_URL: string;
      NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
    }
  }
}

export {};
