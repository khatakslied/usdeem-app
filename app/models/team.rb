class Team < ApplicationRecord
  belongs_to :company
  has_many :users, dependent: :destroy
end
