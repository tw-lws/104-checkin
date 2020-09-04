# 104企業大師自動打卡程式
-----------
## <font color=red>僅供測試還有練習自動化流程用，開發者不負任何法律責任</font>
-----------
## 程式流程

1. 執行程式後，會前往104企業大師的員工登入頁面，自動填入帳號登入
2. 登入成功後會等待一段時間
3. 進入打卡頁面
4. 等待一段時間(隨機時間)
5. 進行打卡動作
6. 螢幕截圖並保存
7. 退出程式


------
## 使用方式
1. 先確定你電腦有安裝nodejs
2. 下載此專案(git clone, 網頁直接下載解壓縮, docker)
3. 透過命令列介面下(CLI Command):
    ``` npm install ```
4. 在專案資料夾內新增 records 資料夾
5. 將 config 資料夾內的 default.json 的測試帳號修改成你104的帳號密碼(此為範例)
   ```
    "user": {
        "username":"example@gmail.com",
        "password":"taiwanNo1"
    }
   ```
6. 透過命令列介面下(CLI Command): node checkin.js
7. 檢查 records 資料夾內是否有你的打卡成功紀錄
-----------
## 注意事項
* 建議搭配排程使用
* 初次使用可將 checkin.js 中headless設定成false:
  ```
  headless: false,
  ```
這樣可以真的讓你看到程式中的動作，之後真的要上排程自動化這個過程建議設定為true，節省記憶體。
* 不清楚的部分可以看一下程式碼註解

-----------
# 再次強調
## <font color=red>本程式僅供開發者測試練習用，練習網頁爬程跟自動流程，若真要拿來打卡用本開發者一概不知情也不負任何責任。</font>