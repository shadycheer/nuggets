<template>
    <div class="'detail">
        <div class="detail-main">
            <!-- 文章主体+评论区域 -->
            <div class="article-main">

                <!-- 文章主体 -->
                <div class="article">
                    <div class="article-title">这是文章标题</div>

                    <!-- 作者卡片 -->
                    <div class="article-author-box">
                        <div class-="author-info">
                            <!-- 作者名字那一行 -->
                            <div class="author-name">
                                <span class="name">作者名字</span>
                                <span>在此引入等级图片</span>
                            </div>

                            <!-- 发布的时间、阅读量 -->
                            <div class="data-box">
                                <span class="time">时间</span>
                                <span>阅读量</span>
                            </div>
                        </div>

                        <!-- 关注按钮 -->
                        <button class="follow-btn">+关注</button>
                    </div>


                </div>

                <!-- 评论区 -->
                <div class="comment">
                    <div class="comment-form">
                        <div></div>
                    </div>
                </div>

                 <!-- 热门评论 -->
                    <div class="hot-list">
                        <div class="title">
                            <span>热门评论</span>
                            <img src="../assets/img/fire.png" alt="">
                        </div>
                        <div class="list">
                            <!-- 一条评论 -->
                            <div class="comment-item">
                                <div class="comment-userImg">
                                </div>
                                <div class="comment-content">
                                    <div class="comment-main">

                                        <div class="user-box">
            
                                        </div>
                                        <div class="content-main">
                                            
                                        </div>
                                        <div class="comment-action-box">
                                            点赞、回复
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                <!-- 全部评论 -->
                <div class="comment-list"></div>
            </div>

            <!-- 侧边栏 -->
            <div class="sidebar">

                <!-- 作者信息 -->
                <div class="author-block"></div>


                <!-- 下载链接 -->
                <div  class="app-link"></div>


                <!-- 文章目录 -->
                <div class="sticky-block-box"></div>

            </div>




            <!-- 左侧点赞等功能面板 -->
            <div class="article-suspended-panel"></div>

            <!-- 右侧评论及回到顶部按钮 -->
            <div class="suspension-panel"></div>
            
        </div>
    </div>
</div>
</template>