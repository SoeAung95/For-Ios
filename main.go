package main

import (
    "fmt"
    "log"
    "os"

    "github.com/joho/godotenv"
    "for-ios-gostarter/utils"
)

func main() {
    err := godotenv.Load()
    if err != nil {
        log.Fatal("🚨 Couldn't load .env file")
    }

    apiKey := os.Getenv("OPENAI_API_KEY")

    fmt.Println(utils.Cyan("🚀 Starting Go CLI Project..."))
    if apiKey == "" {
        fmt.Println(utils.Red("❌ API Key is missing! Add it to your .env file."))
    } else {
        fmt.Println(utils.Green("✅ API Key loaded successfully!"))
        fmt.Println(utils.Yellow("🔐 ") + apiKey[:8] + "..." + apiKey[len(apiKey)-4:]) // safe preview
    }

    fmt.Println(utils.Blue("🌈 All systems operational. Ready for action!"))
}
