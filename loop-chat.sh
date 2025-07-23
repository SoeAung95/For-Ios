#!/bin/sh

echo "Chat with GPT-4o (type 'exit' to quit)"

while true; do
  read -p "You: " input
  if [ "$input" = "exit" ]; then
    break
  fi

  response=$(curl -s https://api.openai.com/v1/chat/completions \
    -H "Authorization: Bearer $OPENAI_API_KEY" \
    -H "Content-Type: application/json" \
    -d "{
      \"model\": \"gpt-4o\",
      \"messages\": [{\"role\": \"user\", \"content\": \"$input\"}]
    }")

  reply=$(echo "$response" | jq -r '.choices[0].message.content // "Error: no reply"')

  echo "GPT: $reply"
done
