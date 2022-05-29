.. raw:: html

   <div style="text-align: center;" class="feedback">
      <h3> Was this section helpful ? </h3>
         <h4 id="choice-feedback-status"></h4>
            <div id="choice-feedback">
                <span><button onclick="yes()">Yes</button></span>
                <button onclick="no()">No</button><br>
            </div>
            <br>
            <button onclick="showFeedbackTextArea()">Send Feedback</button>
            <h4 id="text-feedback-status"></h4>
            <div id="text-feedback" style="display: none;">
                <textarea id="message" name="message" rows="4" cols="60" style="max-width:95%;"></textarea>
                <br>
                <br>
                <button onclick="textFeedback()">Submit feedback</button>
            </div>
        </div>
