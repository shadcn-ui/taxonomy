import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

const redisRestUrl = process.env.UPSTASH_REDIS_REST_URL as string
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN as string

export const redis = new Redis({
    url: redisRestUrl,
    token: redisToken,
})

export const ratelimit = (
    requests: number = 10,
    seconds:
        | `${number} ms`
        | `${number} s`
        | `${number} m`
        | `${number} h`
        | `${number} d` = "10 s"
) => {
    return new Ratelimit({
        redis: redis,
        limiter: Ratelimit.slidingWindow(requests, seconds),
        analytics: true,
    })
}
