<template>
  <view class="wrap">
    <demo-block title="按钮类型">
      <div class="demo-button-row">
        <press-button
          type="default"
          :custom-style="customStyle"
          @click="onClick"
        >
          默认按钮
        </press-button>
        <!-- van-button--width-136 van-button--height-36 -->
        <press-button
          type="primary"
          :custom-style="customStyle"
          :size="{width: '136px', height: '36px'}"
          custom-class="van-button--bg van-button--bg-md"
        >
          主要按钮
        </press-button>
        <press-button
          type="info"
        >
          信息按钮
        </press-button>
      </div>

      <div class="demo-button-row">
        <press-button
          type="warning"
          :custom-style="customStyle"
        >
          警告按钮
        </press-button>
        <press-button
          type="danger"
        >
          危险按钮
        </press-button>
      </div>
    </demo-block>

    <demo-block title="朴素按钮">
      <div class="demo-button-row">
        <press-button
          plain
          type="default"
          :custom-style="customStyle"
        >
          朴素按钮
        </press-button>
        <press-button
          plain
          type="primary"
          :custom-style="customStyle"
        >
          朴素按钮
        </press-button>
      </div>

      <press-button
        plain
        type="info"
        custom-class="van-button--width-136 van-button--height-36"
      >
        朴素按钮
      </press-button>
    </demo-block>


    <demo-block title="细边框">
      <press-button
        plain
        hairline
        type="primary"
        :custom-style="customStyle"
      >
        细边框按钮
      </press-button>
      <press-button
        plain
        hairline
        type="info"
      >
        细边框按钮
      </press-button>
    </demo-block>

    <demo-block title="禁用状态">
      <div class="demo-button-row">
        <press-button
          disabled
          type="primary"
          :custom-style="customStyle"
        >
          禁用状态
        </press-button>
        <press-button
          disabled
          type="info"
          :custom-style="customStyle"
        >
          禁用状态
        </press-button>
      </div>

      <press-button
        disabled
        type="primary"
        :custom-style="customStyle"
        custom-class="van-button--bg van-button--bg-md van-button--width-136 van-button--height-36"
      >
        禁用状态
      </press-button>
    </demo-block>

    <demo-block title="加载状态">
      <press-button
        loading
        type="primary"
        :custom-style="customStyle"
      />
      <press-button
        loading
        type="primary"
        loading-type="spinner"
        :custom-style="customStyle"
      />
      <press-button
        loading
        type="info"
        loading-text="加载中..."
      />
    </demo-block>

    <demo-block title="按钮形状">
      <press-button
        square
        type="primary"
        :custom-style="customStyle"
      >
        方形按钮
      </press-button>
      <press-button
        round
        type="info"
      >
        圆形按钮
      </press-button>
    </demo-block>


    <demo-block title="图标按钮">
      <press-button
        icon="star-o"
        type="primary"
        :custom-style="customStyle"
      />
      <press-button
        icon="star-o"
        type="primary"
        :custom-style="customStyle"
      >
        按钮
      </press-button>
      <press-button
        icon="https://img.yzcdn.cn/vant/logo.png"
        type="info"
      >
        按钮
      </press-button>
    </demo-block>

    <demo-block title="按钮尺寸">
      <div class="demo-button-row">
        <press-button
          type="primary"
          size="large"
        >
          大号按钮
        </press-button>
      </div>

      <press-button
        type="primary"
        size="normal"
        :custom-style="customStyle"
      >
        普通按钮
      </press-button>
      <press-button
        type="primary"
        size="small"
        :custom-style="customStyle"
      >
        小型按钮
      </press-button>
      <press-button
        type="primary"
        size="mini"
      >
        迷你按钮
      </press-button>
    </demo-block>

    <demo-block title="块级元素">
      <press-button
        type="primary"
        block
      >
        块级元素
      </press-button>
    </demo-block>

    <demo-block title="自定义颜色">
      <press-button
        color="#7232dd"
        :custom-style="customStyle"
      >
        单色按钮
      </press-button>
      <press-button
        color="#7232dd"
        plain
        :custom-style="customStyle"
      >
        单色按钮
      </press-button>
      <press-button
        color="linear-gradient(to right, #4bb0ff, #6149f6)"
      >
        渐变色按钮
      </press-button>
    </demo-block>
  </view>
</template>
<script>

export default {
  data() {
    return {
      customStyle: 'margin-right: 16px;',
    };
  },
  onLoad() {
    // #ifdef MP-QQ
    qq.showShareMenu({
      showShareItems: ['qq', 'qzone', 'wechatFriends', 'wechatMoment'],
    });
    // #endif
  },
  methods: {
    onClick(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped lang="scss">
.wrap {
  padding-bottom: 20px;
  background: #fff;
}

.demo-button-row {
  margin-bottom: 12px;
}
</style>

