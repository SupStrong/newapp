<template>
	<view>
		<view class="zhuige-coterie-user G-Mt-15">
			<view class="zhuige-block">
				<view class="zhuige-block-head">
					<view>圈子成员</view>
					<view>查看更多</view>
				</view>

				<view class="zhuige-scroll-user G-Mt-10">
					<scroll-view scroll-x="true">
						<view
							v-for="(user, index) in users"
							:key="index"
							@click="openLink('/pages/user/home/home?user_id=' + user.user_id)"
							class="zhuige-scroll-user-block"
							:class="user.owner == 1 ? 'coterie-master' : ''"
						>
							<view class="zhuige-user-avatar">
								<image mode="aspectFill" :src="user.avatar"></image>
								<image v-if="user.status == 1" mode="aspectFill" :src="user.icon"></image>
							</view>
							<view class="zhuige-user-name">{{ user.nickname }}</view>
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			users: [
				{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋'
				},{
					status: '1',
					avatar: 'https://q.zhuige.com/wp-content/uploads/2022/07/4.png',
					icon: 'https://q.zhuige.com/wp-content/uploads/2022/08/lvv.png',
					nickname: '知秋2'
				}
			]
		};
	},
	methods: {}
};
</script>

<style lang="scss" scoped>
 @import url('../scss/main.css');
</style>
