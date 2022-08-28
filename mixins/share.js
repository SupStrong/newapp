import { filterOptions } from "@/utils/index.js";
export default {
	data() {
		return {
			shareInfo: {
				title: '熊洞商家端'
			}
		}
	},
	onLoad() {
		setTimeout(() => {
			const routes = getCurrentPages();
			const sharePath = routes[routes.length - 1].route;
			const shareOptions = routes[routes.length - 1].options || {};
			const shareQuery = filterOptions(shareOptions);
			this.shareInfo = {
				...this.shareInfo,
				path: sharePath,
				query: shareQuery,
			}
		}, 0)
	},
	onShareAppMessage(res) {
		const {
			title,
			imageUrl,
			path,
			query
		} = this.shareInfo;
	    return {
	      title,
		  imageUrl,
	      path,
		  query
	    }
	  },
	  //分享到朋友圈
	  onShareTimeline(res) {
	     const {
	     	title,
	     	imageUrl,
	     	path,
	     	query
	     } = this.shareInfo;
		 
	    return {
	       title,
	       imageUrl,
	       path,
	       query
	    }
	  }
}