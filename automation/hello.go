package main

import (
	"fmt"
	"log"
	"net/http"
	"os/exec"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Print("Start")
	router := gin.Default()
	router.POST("/webhook", func(c *gin.Context) {
		// Verify the incoming request, e.g., by checking the secret
		// You can access the payload data to identify the branch that was pushed

		// Execute the update_and_run.sh script
		cmd := exec.Command("/bin/bash", "./test.sh")
		output, err := cmd.CombinedOutput()
		if err != nil {
			log.Printf("Error executing script: %v", err)
			c.String(http.StatusInternalServerError, "Error executing script")
			return
		}

		log.Printf("Script output:\n%s", string(output))
		c.String(http.StatusOK, "Webhook received and executed!")
	})
	// Start the Gin server
	if err := router.Run("0.0.0.0:4064"); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
