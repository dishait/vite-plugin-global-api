<script setup lang="ts">
	import { NButton } from 'naive-ui'
	import { n } from 'virtual:global-api'

	const onCLickDialog = () =>
		n.dialog.info({ title: 'Dialog' })

	const onClickMessage = () => n.message.info('Message')

	const onClickNotification = () => {
		n.notification.create({
			title: 'Notification'
		})
	}
</script>

<template>
	<section class="container">
		<n-button class="example" @click="onCLickDialog()">
			Dialog
		</n-button>

		<n-button class="example" @click="onClickMessage()">
			Message
		</n-button>

		<n-button
			class="example"
			@click="onClickNotification()"
		>
			Notification
		</n-button>
	</section>
</template>

<style>
	.container {
		height: 80vh;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}

	.example {
		margin: 20px 0;
	}
</style>
