<template>
  <div class="demo-wrap">
    <demo-block :title="t('basicUsage')">
      <press-card :is-shadow="false">
        <text class="press-body">
          这是一个基础卡片示例，内容较少，此示例展示了一个没有任何属性不带阴影的卡片。
        </text>
      </press-card>
    </demo-block>

    <demo-block title="额外信息">
      <press-card
        title="基础卡片"
        extra="额外信息"
      >
        <text class="press-body">
          这是一个基础卡片示例，此示例展示了一个标题加标题额外信息的标准卡片。
        </text>
      </press-card>
    </demo-block>

    <demo-block title="双标题">
      <press-card
        title="基础卡片"
        sub-title="副标题"
        extra="额外信息"
        :thumbnail="avatar"
        @click="onClick"
      >
        <text class="press-body">
          这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。
        </text>
      </press-card>
    </demo-block>

    <demo-block title="通栏">
      <press-card
        title="基础卡片"
        :is-full="true"
        sub-title="副标题"
        extra="额外信息"
        :thumbnail="avatar"
      >
        <text class="press-body">
          这是一个通栏卡片 ，通栏没有外边距，左右会贴合父元素。
        </text>
      </press-card>
    </demo-block>

    <demo-block title="封面图与操作栏">
      <press-card
        :cover="cover"
        @click="onClick"
      >
        <!-- <image slot='cover' style="width: 100%;" :src="cover"></image> -->
        <text class="press-body">
          这是一个带封面和操作栏的卡片示例，此示例展示了封面插槽和操作栏插槽的用法。
        </text>
        <view
          slot="actions"
          class="card-actions"
        >
          <view
            class="card-actions-item"
            @click="actionsClick('分享')"
          >
            <uni-icons
              type="redo"
              size="18"
              color="#999"
            />
            <text class="card-actions-item-text">
              分享
            </text>
          </view>
          <view
            class="card-actions-item"
            @click="actionsClick('点赞')"
          >
            <uni-icons
              type="heart"
              size="18"
              color="#999"
            />
            <text class="card-actions-item-text">
              点赞
            </text>
          </view>
          <view
            class="card-actions-item"
            @click="actionsClick('评论')"
          >
            <uni-icons
              type="chatbubble"
              size="18"
              color="#999"
            />
            <text class="card-actions-item-text">
              评论
            </text>
          </view>
        </view>
      </press-card>
    </demo-block>

    <demo-block title="自定义标题">
      <press-card
        title="基础卡片"
        sub-title="副标题"
        extra="额外信息"
        padding="10px 0"
        :thumbnail="avatar"
      >
        <template #title>
          <press-cell
            title="标题"
            clickable
            @click="checked = !checked"
          >
            <press-switch
              slot="right-icon"
              size="22px"
              :checked="checked"
            />
          </press-cell>
        </template>
        <image
          style="width: 100%;"
          :src="cover"
        />
        <text class="press-body uni-mt-5">
          卡片组件通用来显示完整独立的一段信息，同时让用户理解他的作用。例如一篇文章的预览图、作者信息、时间等，卡片通常是更复杂和更详细信息的入口点。
        </text>
      </press-card>
    </demo-block>

    <!-- <demo-block title="自定义标题" /> -->
  </div>
</template>
<script>
import PressCard from 'src/packages/press-card/press-card.vue';
import UniIcons from 'src/packages/uni-icons/components/uni-icons/uni-icons.vue';
import PressSwitch from 'src/packages/press-switch/press-switch.vue';

export default {
  components: {
    PressCard,
    UniIcons,
    PressSwitch,
  },
  data() {
    return {
      cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/094a9dc0-50c0-11eb-b680-7980c8a877b8.jpg',
      avatar: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-dc-site/460d46d0-4fcc-11eb-8ff1-d5dcf8779628.png',
      extraIcon: {
        color: '#4cd964',
        size: '22',
        type: 'gear-filled',
      },
      checked: true,
    };
  },
  methods: {
    onClick(e) {
      console.log(e);
    },
    actionsClick(text) {
      uni.showToast({
        title: text,
        icon: 'none',
      });
    },
  },
};
</script>
<style scoped lang="scss">
@import "src/packages/base/mixin.scss";
.demo-wrap {
  padding-bottom: 20px;
}

.card-actions {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 45px;
  border-top: 1px #eee solid;

  .card-actions-item {
    display: flex;
    flex-direction: row;
    align-items: center;

    .card-actions-item-text {
      font-size: 12px;
      color: #666;
      margin-left: 5px;
    }
  }
}
</style>
