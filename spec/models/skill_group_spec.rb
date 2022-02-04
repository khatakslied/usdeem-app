require 'rails_helper'

RSpec.describe SkillGroup, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it 'checks if the initialize method accepts :score on creation' do
    test_skill_group = SkillGroup.new(score: 3)
    expect(test_skill_group.score).to eq(3)
  end
end
