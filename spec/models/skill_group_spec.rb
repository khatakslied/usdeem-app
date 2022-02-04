require 'rails_helper'

RSpec.describe SkillGroup, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"

  it 'checks if the initialize method accepts :score on creation' do
    test_skill_group = SkillGroup.new(score: 3)
    expect(test_skill_group.score).to eq(3)
  end

  context 'checks if it belongs to :key_trait' do
    it { should belong_to(:key_trait) }
  end

  context 'checks if it has many :skills' do
    it { should have_many(:skills) }
  end

end

# it 'checks if the initialize method has :score on creation' do
# test_skill_group = SkillGroup.new(score: '', category: 'Conflict Resolution Skills')
# expect(test_skill_group).to_not be_valid
# test_skill_group.score
# end
