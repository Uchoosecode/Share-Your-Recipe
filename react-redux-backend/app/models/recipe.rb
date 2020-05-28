class Recipe < ApplicationRecord
  belongs_to :chef
  validates :title, presence: true
end
