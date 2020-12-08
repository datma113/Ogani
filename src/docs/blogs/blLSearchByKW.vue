<template>
    <div class="kw-container"
     
    >
        {{element}}
    </div>
</template>

<script>
export default {
    props: {
        element: {
            type: String,
            default: ''
        },
    },
    data() {
        return {
            currentIndex: 0   
        }
    },
    
}
</script>

<style scoped>
.kw-container {
    margin: 0.5rem;
    border-radius: 1rem;
    font-size: 1.5rem;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: 0.1s;
}
.kw-container:hover {
    background-color: #4caf50;
    color: white;
}
</style>