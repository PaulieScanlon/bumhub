import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'

interface IStarburstProps {
  /** The Color of the starburst */
  color?: string
  /** Theme UI JSX pragma */
  sx?: SxStyleProp
}

export const Starburst: FunctionComponent<IStarburstProps> = ({ color = '#ffffff', sx }) => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        ...sx,
      }}
    >
      <svg version="1.0" x="0px" y="0px" viewBox="0 0 1140 610" width="100%" height="100%">
        <g>
          <linearGradient
            id="SVGID_1_"
            gradientUnits="userSpaceOnUse"
            x1="555.4833"
            y1="1514.6089"
            x2="559.3726"
            y2="1191.8083"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="0.746" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_1_)" points="567.9,-1.4 482.8,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_2_"
            gradientUnits="userSpaceOnUse"
            x1="592.478"
            y1="181.9106"
            x2="685.9115"
            y2="-19.3968"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_2_)" points="719.4,-1.4 635.7,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_3_"
            gradientUnits="userSpaceOnUse"
            x1="574.4387"
            y1="321.2659"
            x2="578.2184"
            y2="7.5587"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_3_)" points="620.5,-1.4 536.2,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_4_"
            gradientUnits="userSpaceOnUse"
            x1="603.8345"
            y1="279.2883"
            x2="740.128"
            y2="-0.9762"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_4_)" points="788.3,-1.4 692.3,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_5_"
            gradientUnits="userSpaceOnUse"
            x1="586.8252"
            y1="298.2443"
            x2="419.561"
            y2="5.5323"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_5_)" points="441,-1.4 390.2,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_6_"
            gradientUnits="userSpaceOnUse"
            x1="551.5312"
            y1="337.6559"
            x2="1067.3396"
            y2="71.8171"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_6_)" points="1139.4,99.2 1139.4,-1.4 1084,-1.4 569.7,304.5 	" />
          <linearGradient
            id="SVGID_7_"
            gradientUnits="userSpaceOnUse"
            x1="569.6765"
            y1="315.6665"
            x2="1139.4332"
            y2="315.6665"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_7_)" points="1139.4,368.2 1139.4,263.1 569.7,304.5 	" />
          <linearGradient
            id="SVGID_8_"
            gradientUnits="userSpaceOnUse"
            x1="111.3548"
            y1="68.6486"
            x2="579.5676"
            y2="335.5294"
          >
            <stop offset="0.1297" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_8_)" points="83.9,-1.4 -0.1,-1.4 -0.1,59.5 569.7,304.5 	" />
          <linearGradient
            id="SVGID_9_"
            gradientUnits="userSpaceOnUse"
            x1="574.9158"
            y1="238.2348"
            x2="565.4658"
            y2="587.8993"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_9_)" points="521.5,610.3 608.2,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_10_"
            gradientUnits="userSpaceOnUse"
            x1="531.5792"
            y1="230.3695"
            x2="763.4811"
            y2="585.9518"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_10_)" points="718.3,610.3 840.5,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_11_"
            gradientUnits="userSpaceOnUse"
            x1="460.1952"
            y1="192.1193"
            x2="1098.271"
            y2="556.7343"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_11_)" points="1139.4,519.6 569.7,304.5 1085.8,610.3 1139.4,610.3 	" />
          <linearGradient
            id="SVGID_12_"
            gradientUnits="userSpaceOnUse"
            x1="111.2625"
            y1="294.0045"
            x2="610.5493"
            y2="302.53"
          >
            <stop offset="0.1072" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_12_)" points="-0.1,221.3 -0.1,362.9 569.7,304.5 	" />
          <linearGradient
            id="SVGID_13_"
            gradientUnits="userSpaceOnUse"
            x1="572.702"
            y1="267.1177"
            x2="47.0187"
            y2="543.8794"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="0.7986" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_13_)" points="-0.1,481.5 -0.1,610.3 86.5,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_14_"
            gradientUnits="userSpaceOnUse"
            x1="613.1871"
            y1="279.8404"
            x2="393.3485"
            y2="586.8568"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_14_)" points="326.7,610.3 426.4,610.3 569.7,304.5 	" />

          <linearGradient
            id="SVGID_15_"
            gradientUnits="userSpaceOnUse"
            x1="557.6329"
            y1="1499.7661"
            x2="358.5611"
            y2="1151.3907"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_15_)" points="372.8,-1.4 276.7,-1.4 569.7,304.5 	" />

          <linearGradient
            id="SVGID_16_"
            gradientUnits="userSpaceOnUse"
            x1="554.3773"
            y1="1489.949"
            x2="1137.3257"
            y2="1489.949"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_16_)" points="1139.4,233.7 1139.4,176 569.7,304.5 	" />
          <linearGradient
            id="SVGID_17_"
            gradientUnits="userSpaceOnUse"
            x1="111.0932"
            y1="139.8372"
            x2="547.4598"
            y2="388.5657"
          >
            <stop offset="0.1297" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_17_)" points="-0.1,87.4 -0.1,173.2 569.7,304.5 	" />

          <linearGradient
            id="SVGID_18_"
            gradientUnits="userSpaceOnUse"
            x1="577.6318"
            y1="1428.9983"
            x2="567.8079"
            y2="1792.4971"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_18_)" points="574,610.3 690.5,610.3 569.7,304.5 	" />

          <linearGradient
            id="SVGID_19_"
            gradientUnits="userSpaceOnUse"
            x1="508.0317"
            y1="1409.4663"
            x2="784.8998"
            y2="1833.9965"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_19_)" points="770.3,610.3 950.4,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_20_"
            gradientUnits="userSpaceOnUse"
            x1="494.3088"
            y1="158.974"
            x2="1076.6395"
            y2="491.7346"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_20_)" points="569.7,304.5 1139.4,496.5 1139.4,425.2 	" />

          <linearGradient
            id="SVGID_21_"
            gradientUnits="userSpaceOnUse"
            x1="84.6789"
            y1="1483.5425"
            x2="596.314"
            y2="1492.2788"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0.1072" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_21_)" points="-0.1,307.8 -0.1,453.7 569.7,304.5 	" />
          <linearGradient
            id="SVGID_22_"
            gradientUnits="userSpaceOnUse"
            x1="617.8706"
            y1="356.9255"
            x2="141.1527"
            y2="607.9078"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="0.7986" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_22_)" points="68,610.3 284.5,610.3 569.7,304.5 	" />

          <linearGradient
            id="SVGID_23_"
            gradientUnits="userSpaceOnUse"
            x1="595.9711"
            y1="1477.1703"
            x2="398.9897"
            y2="1752.2654"
            gradientTransform="matrix(0.9872 -0.1596 0.1596 0.9872 -216.5849 -1085.2577)"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_23_)" points="399.7,610.3 485.1,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_24_"
            gradientUnits="userSpaceOnUse"
            x1="652.6923"
            y1="338.18"
            x2="1154.9668"
            y2="586.3388"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </linearGradient>
          <polygon fill="url(#SVGID_24_)" points="569.7,304.5 1139.4,603 1139.4,554.3 	" />
          <linearGradient
            id="SVGID_25_"
            gradientUnits="userSpaceOnUse"
            x1="541.0796"
            y1="642.448"
            x2="550.5579"
            y2="403.5883"
          >
            <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_25_)" points="518.9,610.3 565.8,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_26_"
            gradientUnits="userSpaceOnUse"
            x1="811.335"
            y1="678.5072"
            x2="630.3686"
            y2="380.1053"
          >
            <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_26_)" points="749.3,610.3 790.6,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_27_"
            gradientUnits="userSpaceOnUse"
            x1="-8.217833e-02"
            y1="457.3764"
            x2="569.6765"
            y2="457.3764"
          >
            <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_27_)" points="-0.1,525.4 -0.1,610.3 -0.1,610.3 569.7,304.5 	" />
          <linearGradient
            id="SVGID_28_"
            gradientUnits="userSpaceOnUse"
            x1="364.9532"
            y1="457.3764"
            x2="569.6765"
            y2="457.3764"
          >
            <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
            <stop offset="1" style={{ stopColor: color }} />
          </linearGradient>
          <polygon fill="url(#SVGID_28_)" points="365,610.3 417.2,610.3 569.7,304.5 	" />

          <radialGradient
            id="SVGID_29_"
            cx="525.8338"
            cy="305.6229"
            r="300.7596"
            gradientTransform="matrix(1.0753 0 0 1.0101 6.189116e-03 -6.2662)"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" style={{ stopColor: color }} />
            <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
          </radialGradient>
          <ellipse fill="url(#SVGID_29_)" cx="565.4" cy="302.4" rx="323.4" ry="303.8" />
          <g>
            <linearGradient
              id="SVGID_30_"
              gradientUnits="userSpaceOnUse"
              x1="571.1941"
              y1="323.3652"
              x2="3.4145"
              y2="230.9666"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_30_)" points="-0.1,218.8 -0.1,249 569.7,304.5 		" />
            <linearGradient
              id="SVGID_31_"
              gradientUnits="userSpaceOnUse"
              x1="196.8141"
              y1="33.8675"
              x2="593.2991"
              y2="304.317"
            >
              <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
              <stop offset="1" style={{ stopColor: color }} />
            </linearGradient>
            <polygon fill="url(#SVGID_31_)" points="169,-1.4 153.3,-1.4 569.7,304.5 		" />
            <linearGradient
              id="SVGID_32_"
              gradientUnits="userSpaceOnUse"
              x1="569.6765"
              y1="318.9474"
              x2="1139.4332"
              y2="318.9474"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_32_)" points="1139.4,333.4 1139.4,323.4 569.7,304.5 		" />
            <linearGradient
              id="SVGID_33_"
              gradientUnits="userSpaceOnUse"
              x1="569.6765"
              y1="217.6309"
              x2="1139.4332"
              y2="217.6309"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_33_)" points="1139.4,141.8 1139.4,130.8 569.7,304.5 		" />
            <linearGradient
              id="SVGID_34_"
              gradientUnits="userSpaceOnUse"
              x1="480.873"
              y1="-19.7247"
              x2="575.7684"
              y2="332.0194"
            >
              <stop offset="0" style={{ stopColor: color, stopOpacity: 0 }} />
              <stop offset="1" style={{ stopColor: color }} />
            </linearGradient>
            <polygon fill="url(#SVGID_34_)" points="489.1,-1.4 482.6,-1.4 569.7,304.5 		" />
            <linearGradient
              id="SVGID_35_"
              gradientUnits="userSpaceOnUse"
              x1="569.6765"
              y1="151.5562"
              x2="877.0583"
              y2="151.5562"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_35_)" points="877.1,-1.4 843.1,-1.4 569.7,304.5 		" />
            <linearGradient
              id="SVGID_36_"
              gradientUnits="userSpaceOnUse"
              x1="572.8987"
              y1="291.7485"
              x2="629.7298"
              y2="592.3231"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_36_)" points="632.4,610.3 638.8,610.3 569.7,304.5 		" />
            <linearGradient
              id="SVGID_37_"
              gradientUnits="userSpaceOnUse"
              x1="569.6765"
              y1="457.3764"
              x2="888.0322"
              y2="457.3764"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_37_)" points="836.2,610.3 888,610.3 569.7,304.5 		" />
            <linearGradient
              id="SVGID_38_"
              gradientUnits="userSpaceOnUse"
              x1="567.6995"
              y1="298.3407"
              x2="495.623"
              y2="592.9688"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_38_)" points="487.9,610.3 494.4,610.3 569.7,304.5 		" />
            <linearGradient
              id="SVGID_39_"
              gradientUnits="userSpaceOnUse"
              x1="583.7122"
              y1="275.3549"
              x2="176.1118"
              y2="601.6977"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_39_)" points="136.1,610.3 194.7,610.3 569.7,304.5 		" />
          </g>
          <g>
            <linearGradient
              id="SVGID_40_"
              gradientUnits="userSpaceOnUse"
              x1="565.8771"
              y1="151.6137"
              x2="1037.6057"
              y2="151.6137"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_40_)" points="1037.6,-1.4 1019.2,-1.4 565.9,304.6 		" />
            <linearGradient
              id="SVGID_41_"
              gradientUnits="userSpaceOnUse"
              x1="565.8771"
              y1="151.6137"
              x2="706.6677"
              y2="151.6137"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_41_)" points="706.7,-1.4 699.5,-1.4 565.9,304.6 		" />
            <linearGradient
              id="SVGID_42_"
              gradientUnits="userSpaceOnUse"
              x1="565.8771"
              y1="457.4339"
              x2="592.629"
              y2="457.4339"
            >
              <stop offset="0" style={{ stopColor: color }} />
              <stop offset="1" style={{ stopColor: color, stopOpacity: 0 }} />
            </linearGradient>
            <polygon fill="url(#SVGID_42_)" points="586.5,610.3 592.6,610.3 565.9,304.6 		" />
          </g>
        </g>
      </svg>
    </Box>
  )
}
