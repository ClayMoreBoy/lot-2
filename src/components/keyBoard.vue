<template>
  <div class="c-keyboard">
    <div class="inputDiv">
      <input type="password" id="myInput" />
      <div class="word-border"></div>
      <div class="word-border"></div>
      <div class="word-border"></div>
      <div class="word-border"></div>
      <div class="word-border"></div>
      <div class="word-border"></div>
      <div class="dot-wrap">
      </div>
    </div>
    <div class="keyboard">
      <div class="key" data-key="1">1</div>
      <div class="key" data-key="2">2</div>
      <div class="key" data-key="3">3</div>
      <div class="key" data-key="4">4</div>
      <div class="key" data-key="5">5</div>
      <div class="key" data-key="6">6</div>
      <div class="key" data-key="7">7</div>
      <div class="key" data-key="8">8</div>
      <div class="key" data-key="9">9</div>
      <div class="key"></div>
      <div class="key" data-key="0">0</div>
      <div class="key" data-key="del">删除</div>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default{
    component: {},
    mounted () {
      $('.inputDiv').on('click', function (e) {
        e.stopPropagation()
        $('.keyboard').show()
      })
      $('body').on('click', function (e) {
        $('.keyboard').hide()
      })
      var inputValueArr = []
      var inputValue = ''
      $('.key').on('click', function (e) {
        e.stopPropagation()
        var key = $(this).data('key')
        switch (key) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          case 9:
            handleNum(key)
            break
          case 'del':
            handleDel()
            break
        }
        $('#myInput').focus()
      })
      function handleNum (num) {
        if (inputValueArr.length > 5) {
          return false
        }
        inputValueArr.push(num)
        inputValue = inputValueArr.join('')
        $('#myInput').val(inputValue)
        // 模拟密码输入框的输入
        $('.dot-wrap').empty()
        for (var i = 0; i < inputValueArr.length; i++) {
          $('.dot-wrap').append($('<span class="dot"></span>'))
        }
      }
      function handleDel () {
        inputValueArr.splice(inputValueArr.length - 1, 1)
        inputValue = inputValueArr.join('')
        $('#myInput').val(inputValue)
        // 模拟密码输入框的输入
        $('.dot-wrap').empty()
        for (var i = 0; i < inputValueArr.length; i++) {
          $('.dot-wrap').append($('<span class="dot"></span>'))
        }
      }
    }
  }
</script>
<style lang="scss">
@import "~themes/cKeyboard/cKeyboard";
</style>
