// js/modal.js
const ALL_SERVICES = [
  "Psephological Research & Opinion Polls",
  "Deep Route Campaign Management",
  "Voting Pattern / Field Research",
  "Media Research & PRM",
  "Social Media Management",
  "War Room for Candidate Mapping & Winning Booth",
  "Ground Campaigns / Door to Door",
  "AI & Robotics for Mass Reach"
];

// Automatically detect current service from <h1>
function getCurrentService() {
  const h1 = document.querySelector('h1');
  if (!h1) return ALL_SERVICES[0];
  const title = h1.textContent.trim();
  return ALL_SERVICES.find(s => title.includes(s.split(" ")[0]) || s.includes(title.split(" ")[0])) || ALL_SERVICES[0];
}

// Open modal + pre-check current service
function openServiceModal() {
  const modal = document.getElementById("serviceRegisterModal");
  const container = document.getElementById("servicesCheckboxes");
  const current = getCurrentService();

  container.innerHTML = "";
  ALL_SERVICES.forEach(service => {
    const checked = service === current ? "checked" : "";
    container.innerHTML += `
      <label class="service-checkbox-wrapper">
        <input type="checkbox" name="services" value="${service}" class="service-checkbox" ${checked}>
        <span class="service-checkbox-label">
          ${service}
        </span>
      </label>
    `;
  });

  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeServiceModal() {
  const modal = document.getElementById("serviceRegisterModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  document.getElementById("serviceRegisterForm").reset();
  document.getElementById("serviceSuccessMessage").style.display = "none";
}

function handleServiceSubmit(e) {
  e.preventDefault();
  const selected = Array.from(document.querySelectorAll('input[name="services"]:checked'))
                    .map(cb => cb.value);
  if (selected.length === 0) {
    alert("Please select at least one service");
    return;
  }

  document.querySelector(".service-modal-body form").style.display = "none";
  document.getElementById("serviceSuccessMessage").style.display = "block";

  setTimeout(() => {
    closeServiceModal();
    document.querySelector(".service-modal-body form").style.display = "block";
  }, 4000);
}

// Close with ESC
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeServiceModal();
});