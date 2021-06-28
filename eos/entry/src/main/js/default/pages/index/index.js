// index.js
import fetch from '@system.fetch';
import router from '@system.router';

export default {
    data: {
        currentData: new Date(),
        currencyList: [],
    },
    onInit() {
        this.getCurrencyData()
        this.getCurrentTime()
    },

    // 获取数字货币价格 （https://www.mytokencap.com/）
    getCurrencyData () {
        fetch.fetch({
            url: "https://api.mytokenapi.com/ticker/currencylist?subject=market_cap&page=1&size=30&timestamp=1624551776753&code=c46af242ced71ae5cb8bcbdf0cbac0ae&platform=web_pc&v=1.0.0&language=zh_CN&legal_currency=CNY",
            success: (response) => {

                console.info("responsresponsee");

                response = JSON.parse(response.data)
                let currencyList = []
                response.data.list.forEach((item, index) => {
                    currencyList.push({
                        img: item.logo,
                        name: item.pair,
                        price: item.price_display_cny,
                        rate: item.percent_change_utc0,
                        allData: item
                    })
                })
                this.currencyList = currencyList
            },
            fail: (e) => {
                console.info("fetch fail");
            }
        });
    },

    // 获取当前时间
    getCurrentTime () {
        function fillZero(str) {
            var realNum;
            if (str < 10) {
                realNum = '0' + str;
            } else {
                realNum = str;
            }
            return realNum;
        }
        function getTime () {
            var myDate = new Date();
            var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
            var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
            var myToday = myDate.getDate(); //获取当前日(1-31)
            var myDay = myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
            var myHour = myDate.getHours(); //获取当前小时数(0-23)
            var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
            var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
            var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var nowTime;
            return myYear + '年' + fillZero(myMonth) + '月' + fillZero(myToday) + '日' + '  ' + fillZero(myHour) + ':' +
            fillZero(myMinute) + ':' + fillZero(mySecond) + '  ';
        }
        setInterval(() => {
            this.currentData = getTime()
        }, 1000)
    },

    // 跳转货币详情
    toDetail (item) {
        router.push({
            uri: 'pages/detail/index',
            params: {
                urlParams: item.allData
            },
        });
    },

    toTest () {
        router.push({
            uri: 'pages/webview/index',
            params: {

            }
        });
    }

}