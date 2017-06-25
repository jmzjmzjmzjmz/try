<template>
    <div class="centerFirst">
        <div class="food" v-for="item in firstFloor">
            <!--<img :src="item.img"><br/>-->
            <img src="../../imgs/food1.jpg"><br/>
            <span>{{item.des}}</span>
        </div>
    </div>
</template>
<style>
    .centerFirst > .food {
        float: left;
        width: 25%;
        margin-top: 5%;
        text-align: center;
    }

    .centerFirst > .food > img {
        width: 60%;
        height: 60%;
    }
</style>
<script>
    export default{
        data: function () {
            return {
                firstFloor: [
                    {
                        img: '../../imgs/food1.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food2.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food3.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food4.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food5.jpg',
                        des: '美食'
                    },{
                        img: '../../imgs/food6.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food7.jpg',
                        des: '美食'
                    },
                    {
                        img: '../../imgs/food8.jpg',
                        des: '美食'
                    }

                ]
            }
        }
    }
</script>


