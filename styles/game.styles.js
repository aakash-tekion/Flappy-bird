import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    flappyBird: {
        height: '10%',
        width: '20%',
    },
    gameContainer: {
        position: 'relative',
        height: '100%',
        width: '100%'
    },
    pipesContainer: {
        position: 'absolute',
        flexDirection: 'column',
        width: '20%',
        height: '100%'
    },
    upperPipe: {
        width: '90%'
    },
    gap: {
        width: '100%'
    },
    bottomPipe: {
        width: '90%'
    }
})