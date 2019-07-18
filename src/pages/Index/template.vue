<template>
  <div id="index">
    <section class="blog-posts">
      <router-link
        class="item"
        v-for="blog in blogs"
        :key="blog.id"
        :to="{name: 'detail', params: { blogId:blog.id }}">
        <figure class="avatar">
          <img :src="blog.user.avatar" :alt="blog.user.username">
          <figcaption>{{blog.user.username}}</figcaption>
        </figure>
        <h3>{{blog.title}} <span>{{blog.createAt}}</span></h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page"
        layout="prev, pager, next"
        :total="total"
        :page-size="10"
      >
      </el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less">
</style>
