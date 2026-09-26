import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground } from 'react-native';
import storyBrain from './StoryBrain';

export default function App() {
  // State quản lý chữ hiển thị trên màn hình
  const [story, setStory] = useState(storyBrain.getStory());
  const [choice1, setChoice1] = useState(storyBrain.getChoice1());
  const [choice2, setChoice2] = useState(storyBrain.getChoice2());

  // Hàm update lại UI sau khi đã tính toán logic
  const updateUI = () => {
    setStory(storyBrain.getStory());
    setChoice1(storyBrain.getChoice1());
    setChoice2(storyBrain.getChoice2());
  };

  const handleChoice = (choiceNumber) => {
    // Truyền quyết định của người chơi vào StoryBrain để nó xử lý việc rẽ nhánh
    storyBrain.nextStory(choiceNumber);
    // Sau khi rẽ nhánh xong thì update UI
    updateUI();
  };

  return (
    // Sử dụng ImageBackground để chèn ảnh nền từ một đường link trên mạng
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1519077336940-52069b2d8e4f?q=80&w=2070' }} 
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        
        {/* Phần hiển thị cốt truyện */}
        <View style={styles.storyContainer}>
          <Text style={styles.storyText}>{story}</Text>
        </View>

        {/* Phần các nút bấm lựa chọn */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.choice1Button]} 
            onPress={() => handleChoice(1)}
          >
            <Text style={styles.buttonText}>{choice1}</Text>
          </TouchableOpacity>

          {/* Kỹ thuật Conditional Rendering: Chỉ hiển thị nút 2 nếu nội dung choice2 không bị rỗng */}
          {choice2 !== '' && (
            <TouchableOpacity 
              style={[styles.button, styles.choice2Button]} 
              onPress={() => handleChoice(2)}
            >
              <Text style={styles.buttonText}>{choice2}</Text>
            </TouchableOpacity>
          )}
        </View>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)', // Phủ một lớp đen mờ lên ảnh nền cho dễ đọc chữ
  },
  storyContainer: {
    flex: 4, 
    justifyContent: 'center',
  },
  storyText: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 35, // Khoảng cách giữa các dòng chữ
  },
  buttonContainer: {
    flex: 1, 
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  choice1Button: {
    backgroundColor: '#F44336', // Đỏ
  },
  choice2Button: {
    backgroundColor: '#2196F3', // Xanh lam
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});
