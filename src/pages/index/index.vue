<template>
	<view class="content">
		<press-button type="default">默认按钮</press-button>
		<press-button type="primary">主要按钮</press-button>
		<press-button type="info">信息按钮</press-button>
		<press-button type="warning">警告按钮</press-button>
		<press-button type="danger">危险按钮</press-button>
	</view>
</template>


<script>
import PressButton from 'press-ui/press-button/press-button';
export default {
	components: {
		PressButton,
	},
	data() {
		return {
		}
	},
	onLoad() {

	},
	methods: {

	}
}
</script>

<style scoped lang="scss">
.content {
	padding-top: 10px;
}
.press-button {
	margin-right: 20px;
	margin-top: 12px;
}
</style>
