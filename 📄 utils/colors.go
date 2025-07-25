package utils

import "fmt"

func Red(s string) string {
    return fmt.Sprintf("\033[31m%s\033[0m", s)
}

func Green(s string) string {
    return fmt.Sprintf("\033[32m%s\033[0m", s)
}

func Yellow(s string) string {
    return fmt.Sprintf("\033[33m%s\033[0m", s)
}

func Blue(s string) string {
    return fmt.Sprintf("\033[34m%s\033[0m", s)
}

func Cyan(s string) string {
    return fmt.Sprintf("\033[36m%s\033[0m", s)
}
