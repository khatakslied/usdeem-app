class Company < ApplicationRecord
  has_many :teams, dependent: :destroy
end
