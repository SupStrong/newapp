const filters = {
	filter: (value, key, props) => {
		let propList = props ? [value, ...props] : [value]
		if (key && (value || value === 0)) return filters[key].apply(this, propList)
		else if (value === 0) return value
		else return value || '-'
	},
	pay_status: value => {
		switch (parseInt(value)) {
			case 0:
				return '等待支付'
			case 1:
				return '已支付'
			case 12:
				return '无需支付'
			default:
				break
		}
	},
	auditStatus: value => {
		switch (parseInt(value)) {
			case 1:
				return '待审核'
			case 2:
				return '已结算'
			case 3:
				return '审核拒绝'
			case 4:
				return '异常'
			case 5:
				return '待结帐'
			default:
				break
		}
	},
	settleAccountsStatus: value => {
		switch (parseInt(value)) {
			case 1:
				return '待结账'
			case 2:
				return '已结账'
			default:
				break
		}
	},
	// 入账状态
	accounting: value => {
		switch (parseInt(value)) {
			case 2:
				return '已结账'
			case 1:
				return '未结账'
			default:
				break
		}
	},
	// 收款状态
	receivables: value => {
		switch (parseInt(value)) {
			case 2:
				return '已收款'
			case 1:
				return '未收款'
			default:
				break
		}
	},
	// 开票状态
	invoice: value => {
		switch (parseInt(value)) {
			case 2:
				return '已开票'
			case 1:
				return '未开票'
			default:
				break
		}
	},
	// 收支类型
	inAndOut: value => {
		switch (parseInt(value)) {
			case 1:
				return '收入'
			case 2:
				return '支出'
			default:
				break
		}
	},
	// 确认状态
	examineStatus: value => {
		switch (parseInt(value)) {
			case 0:
				return '未审核'
			case 1:
				return '已审核'
			case 2:
				return '有异议'
			default:
				break
		}
	},
	// 入账状态
	settleStatus: value => {
		switch (parseInt(value)) {
			case 0:
				return '未入账'
			case 1:
				return '已入账'
			default:
				break
		}
	},
	// 账单确认状态
	confirmStatusSupply: value => {
		switch (parseInt(value)) {
			case 0:
				return '待对账'
			case 1:
				return '对账中'
			case 2:
				return '对账完成'
			default:
				break
		}
	},
	// 账单收款状态
	receivablesMonthlyAccount: value => {
		switch (parseInt(value)) {
			case 0:
				return '未收款'
			case 1:
				return '已收款'
			case 2:
				return '无需付款'
			default:
				break
		}
	},
	// 账单开票状态
	invoiceStatus: value => {
		switch (parseInt(value)) {
			case 0:
				return '已开票'
			case 1:
				return '未开票'
			default:
				break
		}
	},
	// 发票类型
	invoiceType: value => {
		switch (parseInt(value)) {
			case 0:
				return '增值税电子普通发票'
			case 1:
				return '增值税普通发票'
			case 2:
				return '增值税专用发票'
			default:
				return ''
		}
	}
}

export default filters
