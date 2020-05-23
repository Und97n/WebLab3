<template>
	<div id="app" class = "main">
		<transition name="moveInUp">
			<router-view/> <!-- the area where routing is working (Add, Edit, Delete, Home) -->
		</transition>
	</div>
</template>

<style>
	.moveInUp-enter-active{
		opacity: 0;
		transition: opacity 0.2s ease-in-out;
	}
	* {
		font-family: Arial, Helvetica, sans-serif;
	}
	body {
        color: white;
        background-color: #698694;
    }
</style>
