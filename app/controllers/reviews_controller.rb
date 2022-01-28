class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def new
    @review = Review.new
  end

  def create
    @score = []
    raise
  end
end

# “{
# Analysis: {score: 2, Analysis: true, Divergent_thinking: false, Experimenting: false, Observation: true },
# Creativity: {score: 3, Artistic_sense: true, Imagination: false, Brainstorming: true, Design: true, Design_sense: true, Innovation: true, Insight: true, Inspiration: false, Mind_mapping: true, Lateral_thinking: false},
# Troubleshooting: {score: 5, Troubleshooting: false, Questioning: false, Logical_reasoning: false, Persistence: false, Reframing: false}
# }”
