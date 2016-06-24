class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :description, null: false
      t.boolean :completed, default: false
      t.boolean :archived, default: false

      t.timestamps
    end
  end
end
