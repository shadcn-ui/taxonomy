import { ImageResponse } from "@vercel/og"

import { ogImageSchema } from "@/lib/validations/og"

export const runtime = "edge"

const interRegular = fetch(
  new URL("../../../assets/fonts/Inter-Regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const interBold = fetch(
  new URL("../../../assets/fonts/CalSans-SemiBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: Request) {
  try {
    const fontRegular = await interRegular
    const fontBold = await interBold

    const url = new URL(req.url)
    const values = ogImageSchema.parse(Object.fromEntries(url.searchParams))
    const heading =
      values.heading.length > 140
        ? `${values.heading.substring(0, 140)}...`
        : values.heading

    const { mode } = values
    const paint = mode === "dark" ? "#fff" : "#000"

    const fontSize = heading.length > 100 ? "70px" : "100px"

    return new ImageResponse(
      (
        <div
          tw="flex relative flex-col p-12 w-full h-full items-start"
          style={{
            color: paint,
            background:
              mode === "dark"
                ? "linear-gradient(90deg, #000 0%, #111 100%)"
                : "white",
          }}
        >
          <svg width="212" height="50" viewBox="0 0 212 50" fill="none">
            <g clip-path="url(#a)" fill={paint}>
              <path d="M99.715 9.784h26.128v4.823h-10.365v25.37h-5.182v-25.37h-10.58V9.784ZM56.746 9.784v4.823H35.803v7.757h16.842v4.823H35.803v7.967h20.943v4.823H30.62v-25.37h-.002V9.784h26.128ZM69.792 9.797H63.01l24.292 30.192h6.801L81.956 24.903 94.084 9.82l-6.782.01-8.742 10.856-8.768-10.89ZM76.751 31.363l-3.396-4.222L62.99 40.012h6.802l6.96-8.649Z" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M30.802 39.977 6.478 9.77H0v30.193h5.182V16.225l19.11 23.752h6.51Z"
              />
              <path d="M127.008 39.792c-.38 0-.703-.131-.973-.394a1.267 1.267 0 0 1-.4-.959c-.004-.366.13-.681.4-.944.27-.263.593-.395.973-.395.365 0 .684.132.955.395.274.263.41.578.414.944-.004.25-.067.478-.193.682-.13.208-.295.37-.502.488a1.298 1.298 0 0 1-.674.183ZM135.853 27.073h2.296v8.847c-.003.814-.179 1.51-.523 2.094a3.477 3.477 0 0 1-1.447 1.346c-.614.311-1.334.47-2.152.47-.748 0-1.419-.135-2.016-.398a3.239 3.239 0 0 1-1.418-1.176c-.352-.519-.524-1.166-.524-1.941h2.301c.003.339.08.633.228.879.147.245.351.432.611.564.263.131.565.197.905.197.369 0 .685-.076.942-.232.256-.152.453-.38.59-.685.133-.301.203-.675.207-1.118v-8.847ZM147.598 30.533a1.67 1.67 0 0 0-.73-1.252c-.432-.301-.99-.45-1.675-.45-.481 0-.895.073-1.239.214-.345.146-.611.34-.794.585a1.423 1.423 0 0 0-.281.84c0 .264.063.492.186.683.123.193.288.356.502.487.211.135.446.246.703.336.259.09.519.166.779.228l1.197.294c.481.111.949.26 1.394.45.446.187.85.426 1.205.713.354.287.635.633.842 1.038.208.405.313.879.313 1.426 0 .737-.19 1.384-.573 1.944-.382.557-.933.993-1.657 1.308-.72.312-1.59.47-2.616.47-.99 0-1.854-.151-2.581-.456-.73-.301-1.299-.744-1.71-1.325-.41-.582-.632-1.29-.663-2.125h2.275c.032.436.172.8.411 1.094.242.29.558.505.945.65.389.142.825.215 1.306.215.502 0 .944-.076 1.327-.225.379-.149.678-.357.892-.626.218-.267.327-.582.33-.942-.003-.328-.102-.602-.292-.816-.193-.215-.459-.395-.8-.54a8.25 8.25 0 0 0-1.201-.39l-1.454-.368c-1.05-.266-1.882-.671-2.489-1.214-.611-.543-.913-1.263-.913-2.166 0-.74.203-1.391.615-1.948.407-.557.965-.99 1.671-1.298.709-.311 1.51-.463 2.401-.463.906 0 1.7.152 2.385.463.684.308 1.222.737 1.611 1.284a3.25 3.25 0 0 1 .605 1.882h-2.227Z" />
            </g>
            <path
              d="M181.335 14.636V35h-5.528V19.727h-.119l-4.455 2.665v-4.693l5.011-3.063h5.091Zm12.136 20.642c-1.604 0-3.029-.275-4.276-.825-1.239-.557-2.214-1.322-2.923-2.297-.709-.974-1.067-2.094-1.074-3.36h5.568c.007.39.126.742.358 1.053.239.305.564.544.975.716.411.173.881.259 1.412.259.51 0 .961-.09 1.352-.269.391-.185.696-.44.915-.765.218-.325.325-.696.318-1.114a1.637 1.637 0 0 0-.378-1.094c-.252-.318-.606-.566-1.064-.745-.457-.18-.984-.269-1.581-.269h-2.068V22.75h2.068c.55 0 1.034-.09 1.452-.268.424-.18.752-.428.984-.746.239-.318.355-.683.348-1.094a1.824 1.824 0 0 0-.288-1.054 2.012 2.012 0 0 0-.835-.716c-.352-.172-.759-.258-1.223-.258-.504 0-.955.09-1.353.268a2.25 2.25 0 0 0-.924.746 1.891 1.891 0 0 0-.348 1.094h-5.29c.007-1.247.348-2.347 1.024-3.302.683-.954 1.617-1.703 2.804-2.247 1.187-.543 2.549-.815 4.087-.815 1.504 0 2.833.255 3.987.766 1.16.51 2.065 1.213 2.714 2.107.657.889.981 1.906.975 3.053.013 1.14-.378 2.075-1.174 2.804-.788.73-1.789 1.16-3.002 1.293v.159c1.644.179 2.88.683 3.708 1.511.829.822 1.237 1.856 1.223 3.102.007 1.194-.351 2.25-1.073 3.172-.716.922-1.714 1.644-2.993 2.168-1.273.524-2.741.785-4.405.785Z"
              fill={paint}
            />
            <rect
              x="163"
              y="1"
              width="48"
              height="48"
              rx="9"
              stroke={paint}
              stroke-width="2"
            />
            <defs>
              <clipPath id="a">
                <path fill={paint} d="M0 9.771h150v30.457H0z" />
              </clipPath>
            </defs>
          </svg>
          <div tw="flex flex-col flex-1 py-10">
            <div
              tw="flex text-xl uppercase font-bold tracking-tight"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              {values.type}
            </div>
            <div
              tw="flex leading-[1.1] text-[80px] font-bold"
              style={{
                fontFamily: "Cal Sans",
                fontWeight: "bold",
                marginLeft: "-3px",
                fontSize,
              }}
            >
              {heading}
            </div>
          </div>
          <div tw="flex items-center w-full justify-between">
            <div
              tw="flex text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              tx.shadcn.com
            </div>
            <div
              tw="flex items-center text-xl"
              style={{ fontFamily: "Inter", fontWeight: "normal" }}
            >
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none">
                <path
                  d="M30 44v-8a9.6 9.6 0 0 0-2-7c6 0 12-4 12-11 .16-2.5-.54-4.96-2-7 .56-2.3.56-4.7 0-7 0 0-2 0-6 3-5.28-1-10.72-1-16 0-4-3-6-3-6-3-.6 2.3-.6 4.7 0 7a10.806 10.806 0 0 0-2 7c0 7 6 11 12 11a9.43 9.43 0 0 0-1.7 3.3c-.34 1.2-.44 2.46-.3 3.7v8"
                  stroke={paint}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18 36c-9.02 4-10-4-14-4"
                  stroke={paint}
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div tw="flex ml-2">github.com/shadcn/taxonomy</div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "Inter",
            data: fontRegular,
            weight: 400,
            style: "normal",
          },
          {
            name: "Cal Sans",
            data: fontBold,
            weight: 700,
            style: "normal",
          },
        ],
      }
    )
  } catch (error) {
    return new Response(`Failed to generate image`, {
      status: 500,
    })
  }
}
