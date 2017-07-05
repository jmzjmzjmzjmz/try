<template>
    <div class="firstFloor">
        <div class="firstFood" v-for="item in firstFloor">
            <img :src="item.img"/><br/>
            <span>{{item.des}}</span>
        </div>
        <div class="slider">
            <img src="../../assets/imgs/slider1.jpg" alt="">
        </div>
    </div>
</template>
<style>
    .firstFloor{
        background: white;
        margin-bottom:10px;
    }
    .firstFloor > .firstFood {
        float: left;
        width: 25%;
        margin-top: 5%;
        text-align: center;
        color: grey;
    }

    .firstFloor > .firstFood img {
        width: 45px;
        height: 40px;
    }
    .firstFloor>.slider{
        clear: both;
        padding-top:20px;
        padding-bottom:5px;
    }
    .firstFloor>.slider>img{
        width:100%;
        height:80px;
    }
</style>
<script>
    export default{
        data: function () {
            return {
                firstFloor: [
                    {
                        img: '/imgs/firstFood1.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood2.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood3.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood4.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood5.jpg',
                        des: '美食'
                    },{
                        img: '/imgs/firstFood6.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood7.jpg',
                        des: '美食'
                    },
                    {
                        img: '/imgs/firstFood8.jpg',
                        des: '美食'
                    }

                ]
            }
        }
    }
</script>


