function addRecommendation() {
    const recommendation = document.getElementById("new_recommendation");
    if (recommendation && recommendation.value != null && recommendation.value.trim() !== "") {
      console.log("New recommendation added");
  
      const element = document.createElement("div");
      element.className = "recommendation";
      element.innerHTML = "<span>&#8220;</span>" +
                          recommendation.value.trim() +
                          "<span>&#8221;</span>";
  
      const container = document.getElementById("all_recommendations");
      if (container) {
        container.appendChild(element);
      } else {
        console.error("Container for recommendations not found");
      }
  
      recommendation.value = "";
  
      // Show the popup
      showPopup(true);
    } else {
      console.log("No recommendation entered");
    }
  }
  
  function showPopup(isVisible) {
    const popupElem = document.getElementById("popup");
    if (!popupElem) {
      console.error("Popup element not found");
      return;
    }
  
    if (isVisible) {
      popupElem.style.visibility = "visible";
    } else {
      popupElem.style.visibility = "hidden";
    }
  }
  