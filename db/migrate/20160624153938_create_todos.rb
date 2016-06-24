class CreateTodos < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.string :description
      t.boolean :completed
      t.boolean :archived

      t.timestamps
    end
  end
end
