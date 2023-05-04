/* eslint-disable sona/no-process-env */
import { z } from 'zod';

/*
  Config Schema
*/

const environmentSchema = z.enum(['development', 'staging', 'production']);

const web3AuthSchema = z.object({
  key: z.string(),
  chain: z.enum(['mainnet', 'goerli']),
});

/*
  Config Items
 */
const environment =
  (process.env.NEXT_PUBLIC_APP_ENV as z.infer<typeof environmentSchema>) ||
  'development';

const isProduction = environment === 'production';

const configSchema = z.object({
  environment: environmentSchema,
  isProduction: z.boolean(),
  remoteApiUrl: z.string(),
});

const web3auth: z.infer<typeof web3AuthSchema> = {
  key: (process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY as string) || ' ',
  chain: isProduction ? 'mainnet' : 'goerli',
};

/*
  Config... typed
 */
const config: z.infer<typeof configSchema> = configSchema.parse({
  environment,
  isProduction,
  web3auth,
});

export default config;
