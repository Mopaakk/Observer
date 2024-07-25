const responses = {
    "Mopaak": "The Emperor! I see a path of rigid control and domination. You will find yourself embroiled in power struggles, where authority crushes all dissent. Your ambitions, once noble, will lead you down a path of isolation and tyranny. Beware the consequences of your desire for control, for in your quest for dominance, you may lose all that once brought you joy and companionship.",
    "Iko": "The Fool! I see recklessness and naivety. You stand on the precipice of a journey fraught with peril. Your carefree spirit blinds you to the dangers ahead, and your actions may lead to catastrophic consequences. Be wary, for the choices you make in haste will echo through time, leaving a trail of regrets and missed opportunities. Take heed, lest your journey into the unknown becomes a path of irreversible folly and despair.",
    "Charlie": "The High Priestess! Bearer of hidden knowledge and intuition, you cast a shadow upon your path. From here i warn thee of secrets and mysteries that will elude your grasp. Your intuition, once a guiding light, now falters in darkness. Trust is shattered, and clarity evades your every decision. Beware, for what lies beneath the surface may be more treacherous than meets the eye. The silence around you whispers of deceit and manipulation, leading you astray from truth and wisdom.",
    "Yosaf": "The High Priestess! Bearer of hidden knowledge and intuition, you cast a shadow upon your path. From here i warn thee of secrets and mysteries that will elude your grasp. Your intuition, once a guiding light, now falters in darkness. Trust is shattered, and clarity evades your every decision. Beware, for what lies beneath the surface may be more treacherous than meets the eye. The silence around you whispers of deceit and manipulation, leading you astray from truth and wisdom.",
    "Infinity":"The Devil! I see chains that bound you. Your presence signals a period of entrapment and illusion. You will find yourself ensnared in murderous storms and destructive Wars. Desires, once manageable, now consume you with insatiable hunger. Beware the chains that bind you, for they tighten with every choice made in pursuit of instant gratification. Darkness clouds your judgment, blinding you to the consequences of your actions. ",
    "Infinito":"The Devil! I see chains that bound you. Your presence signals a period of entrapment and illusion. You will find yourself ensnared in murderous storms and destructive Wars. Desires, once manageable, now consume you with insatiable hunger. Beware the chains that bind you, for they tighten with every choice made in pursuit of instant gratification. Darkness clouds your judgment, blinding you to the consequences of your actions. ",
    "Ludovico":"How does it feel being a liar whose pants are constantly on fire?",
    "Observer":"How did you get here",
    "The Observer":"How did you get here",
    "Elena": "They gave fourth their only child to devote by fire to Moloch, and so profaned the name of their God.",
    "Lux": "The child born only to steal and kill and destroy; I have come that you may have life, and have it to the full.",
    "Cuccino": "And all of her merry man drowned.",
    "Charlotte": "And all of her merry man drowned.",
    "Aibek": "A reminder of my own failure, come staring back at me.",
    "Queen Catra": "I steal your sanity, betray your heart and let it bleed. Burn down your paradise and drain your love. I stain your purity, become thy faithful enemy.",
    "Catra": "I steal your sanity, betray your heart and let it bleed. Burn down your paradise and drain your love. I stain your purity, become thy faithful enemy.",
    "Forever King": "I will never forget you, and all the sweet suffering you provided.",
    "The Forever king": "I will never forget you, and all the sweet suffering you provided.",
    "Skjoralmor": "A natural born monster.",
    "Svana Merilis": "Abandoned to the dogs.",
    "Queen Svana Merilis": "Abandoned to the dogs.",
    "Akharos": "Never stood a chance.",
    "Mara": "And he never suspected.",
    "Oblako": "I have a special place designed just for you in the bowels of the beast."
};

// Function to handle the submission
function submitResponse() {
    const userResponse = document.getElementById('user-response').value;
    const responseContainer = document.getElementById('response');

    // Check if the user response matches any predefined responses
    if (responses[userResponse]) {
        // Display the corresponding response
        responseContainer.innerHTML = responses[userResponse];

        // Add a new input field for the follow-up question
        const newInput = document.createElement('input');
        newInput.type = 'text';
        newInput.placeholder = '...';
        newInput.id = 'follow-up-response';

        // Append the new input field to the response container
        responseContainer.appendChild(newInput);

        // Optionally, you can add a new submit button for the follow-up question
        const newButton = document.createElement('button');
        newButton.innerHTML = 'Submit';
        newButton.onclick = submitFollowUpResponse;
        responseContainer.appendChild(newButton);
    } else {
        // If no match, display a default message
        responseContainer.innerHTML = 'You have a fun name.';
    }
}
// Function to handle the follow-up response (if needed)
function submitFollowUpResponse() {
    const followUpResponse = document.getElementById('follow-up-response').value;
    const responseContainer = document.getElementById('response');

    // Handle the follow-up response here
    responseContainer.innerHTML = `Thank you for your response: ${followUpResponse}`;
}