// xxx.js
import router from '@system.router';

export default {
    data: {
        lineData: [
            {
                strokeColor: '#0081ff',
                fillColor: '#cce5ff',
//                data: [763, 550, 551, 554, 731, 654, 525, 696, 595, 628, 791, 505, 613, 575, 475, 553, 491, 680, 657, 716],
//                data: [3.66985, 3.66985, 3.41643, 3.4762, 4.48056, 4.40317, 4.5856, 4.85018],
                data: [],
                gradient: true,
            }
        ],
        lineOps: {
            xAxis: {
                min: 0,
                max: 10,
                display: false,
                axisTick: 10,
                color: "#f3f3f3"
            },
            yAxis: {
                min: 0,
                max: 294426,
                display: false,
            },
            series: {
                lineStyle: {
                    width: "5px",
                    smooth: true,
                },
                headPoint: {
                    shape: "circle",
                    size: 20,
                    strokeWidth: 5,
                    fillColor: '#ffffff',
                    strokeColor: '#007aff',
                    display: true,
                },
                loop: {
                    margin: 2,
                    gradient: true,
                }
            }
        },
        urlParams: {}
    },
    addData() {
        this.$refs.linechart.append({
            serial: 0,
            data: [Math.floor(Math.random() * 400) + 400]
        })
    },
    onInit() {
        console.info('urlParams:' + this.urlParams);
        this.handlingData()
    },

    handlingData (val) {
        if (!this.urlParams.kline) return
        this.lineData.data = []
        this.urlParams.kline.forEach((item) => {
            this.lineData[0].data.push(item.close)
        })
    },

    // 设置价格
    toSetPrice () {
        router.push({
            uri: 'pages/setting/index',
            params: {

            },
        });

    }


}