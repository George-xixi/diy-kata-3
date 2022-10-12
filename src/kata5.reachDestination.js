const reachDestination = (distance, speed) => {
  const remainingTimeRounded = Math.ceil((distance / speed) * 2) / 2;
  return `I should be there in ${remainingTimeRounded} hours.`;
};

module.exports = reachDestination;
