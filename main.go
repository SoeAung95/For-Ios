package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
)

type OpenAIRequest struct {
	Prompt string `json:"prompt"`
}

type OpenAIResponse struct {
	Response string `json:"response"`
}

func handleRoot(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./frontend/index.html")
}

func handleFrontend(w http.ResponseWriter, r *http.Request) {
	http.StripPrefix("/frontend/", http.FileServer(http.Dir("./frontend"))).ServeHTTP(w, r)
}

func handleAPI(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Only POST allowed", http.StatusMethodNotAllowed)
		return
	}

	var req OpenAIRequest
	err := json.NewDecoder(r.Body).Decode(&req)
	if err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	// 🧪 Mock response for now
	response := fmt.Sprintf("🤖 You said: %s", req.Prompt)

	resp := OpenAIResponse{Response: response}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	port := "8080"
	fmt.Println("🚀 Go server running at http://localhost:" + port)

	http.HandleFunc("/", handleRoot)
	http.Handle("/frontend/", http.StripPrefix("/frontend/", http.FileServer(http.Dir("./frontend"))))
	http.HandleFunc("/api/chat", handleAPI)

	err := http.ListenAndServe(":"+port, nil)
	if err != nil {
		fmt.Println("❌ Server failed:", err)
		os.Exit(1)
	}
}
